// js/app.js

document.addEventListener('DOMContentLoaded', () => {
    const mainContent = document.getElementById('main-content');
    const navLinks = document.querySelectorAll('header nav ul li a'); // For later active state handling

    // --- Data Access ---
    // Assuming data.js has populated window.blogData
    const { posts: allPosts, categories: allCategories, authors: allAuthors } = window.blogData;

    // --- Helper Functions ---
    function findPostById(postId) {
        return allPosts.find(post => post.id === postId);
    }

    function findAuthorById(authorId) {
        return allAuthors.find(author => author.id === authorId);
    }

    function findCategoryById(categoryId) {
        return allCategories.find(category => category.id === categoryId);
    }

    // --- Rendering Functions ---
    function renderPostListItem(post) {
        const author = findAuthorById(post.authorId);
        const category = findCategoryById(post.categoryId);

        return `
            <article class="post" data-id="${post.id}">
                ${post.featuredImage ? `<div class="featured-image"><img src="${post.featuredImage}" alt="${post.title}"></div>` : ''}
                <h2><a href="#post/${post.id}">${post.title}</a></h2>
                <p class="post-meta">
                    Published on ${new Date(post.publishDate).toLocaleDateString()}
                    by ${author ? author.name : 'Unknown Author'}
                    ${category ? `in <a href="#category/${category.id}">${category.name}</a>` : ''}
                </p>
                <div class="post-excerpt">
                    ${post.excerpt}
                </div>
                <a href="#post/${post.id}" class="btn">Read More</a>
            </article>
        `;
    }

    function renderFullPost(post) {
        const author = findAuthorById(post.authorId);
        const category = findCategoryById(post.categoryId);
        // Clear previous content
        mainContent.innerHTML = '';

        const articleElement = document.createElement('article');
        articleElement.classList.add('full-post');
        articleElement.innerHTML = `
            <h1>${post.title}</h1>
            ${post.featuredImage ? `<div class="featured-image"><img src="${post.featuredImage}" alt="${post.title}"></div>` : ''}
            <p class="post-meta">
                Published on ${new Date(post.publishDate).toLocaleDateString()}
                by ${author ? author.name : 'Unknown Author'}
                ${category ? `in <a href="#category/${category.id}">${category.name}</a>` : ''}
            </p>
            <div class="post-content">
                ${post.content}
            </div>
            ${author ? `
                <div class="author-bio">
                    <h3>About the Author</h3>
                    ${author.photoUrl ? `<img src="${author.photoUrl}" alt="${author.name}" class="author-photo">` : ''}
                    <h4>${author.name}</h4>
                    <p>${author.bio}</p>
                    <p>
                        ${author.socialLinks.twitter ? `<a href="${author.socialLinks.twitter}" target="_blank" rel="noopener noreferrer">Twitter</a>` : ''}
                        ${author.socialLinks.linkedin ? `<a href="${author.socialLinks.linkedin}" target="_blank" rel="noopener noreferrer">LinkedIn</a>` : ''}
                        ${author.socialLinks.github ? `<a href="${author.socialLinks.github}" target="_blank" rel="noopener noreferrer">GitHub</a>` : ''}
                    </p>
                </div>
            ` : ''}
            <a href="#home" class="btn">Back to Home</a>
        `;
        mainContent.appendChild(articleElement);
    }

    function renderPostList(postsToRender) {
        // Clear previous content
        mainContent.innerHTML = '';

        if (!postsToRender || postsToRender.length === 0) {
            mainContent.innerHTML = '<p>No posts found.</p>';
            return;
        }
        const postsHtml = postsToRender.map(renderPostListItem).join('');
        mainContent.innerHTML = `
            <section class="post-list">
                ${postsHtml}
            </section>
        `;
    }

    function renderCategoryNav() {
        const navUl = document.querySelector('header nav ul');
        // Remove existing category links to prevent duplication if called multiple times
        navUl.querySelectorAll('.category-link').forEach(link => link.remove());

        allCategories.forEach(category => {
            const li = document.createElement('li');
            li.classList.add('category-link');
            li.innerHTML = `<a href="#category/${category.id}">${category.name}</a>`;
            // Insert before the 'About' link, or at the end if 'About' doesn't exist
            const aboutLink = Array.from(navUl.children).find(child => child.textContent.trim().toLowerCase() === 'about');
            if (aboutLink) {
                navUl.insertBefore(li, aboutLink);
            } else {
                navUl.appendChild(li);
            }
        });
    }

    function renderAboutPage() {
        const author = allAuthors[0]; // Assuming single author for personal blog
        mainContent.innerHTML = `
            <section class="about-page">
                <h2>About Me</h2>
                ${author ? `
                    <div class="author-profile">
                        ${author.photoUrl ? `<img src="${author.photoUrl}" alt="${author.name}" class="author-photo-large">` : ''}
                        <h3>${author.name}</h3>
                        <p>${author.bio}</p>
                        <h4>Connect with me:</h4>
                        <p>
                            ${author.socialLinks.twitter ? `<a href="${author.socialLinks.twitter}" class="btn" target="_blank" rel="noopener noreferrer">Twitter</a>` : ''}
                            ${author.socialLinks.linkedin ? `<a href="${author.socialLinks.linkedin}" class="btn" target="_blank" rel="noopener noreferrer">LinkedIn</a>` : ''}
                            ${author.socialLinks.github ? `<a href="${author.socialLinks.github}" class="btn" target="_blank" rel="noopener noreferrer">GitHub</a>` : ''}
                        </p>
                    </div>
                ` : '<p>Author information not available.</p>'}
                <a href="#home" class="btn">Back to Home</a>
            </section>
        `;
    }


    // --- Router ---
    function router() {
        const path = window.location.hash.slice(1) || 'home'; // Default to 'home'
        const parts = path.split('/');

        mainContent.innerHTML = ''; // Clear content for new "page"

        if (parts[0] === 'home') {
            renderPostList(allPosts.sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate))); // Sort by newest first
        } else if (parts[0] === 'post' && parts[1]) {
            const postId = parts[1];
            const post = findPostById(postId);
            if (post) {
                renderFullPost(post);
            } else {
                mainContent.innerHTML = '<p>Post not found.</p>';
            }
        } else if (parts[0] === 'category' && parts[1]) {
            const categoryId = parts[1];
            const category = findCategoryById(categoryId);
            if (category) {
                const postsInCategory = allPosts.filter(post => post.categoryId === categoryId)
                                                .sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate));
                mainContent.innerHTML = `<h2>Category: ${category.name}</h2>`; // Add category title
                renderPostList(postsInCategory); // Re-uses the list rendering
            } else {
                mainContent.innerHTML = '<p>Category not found.</p>';
            }
        } else if (parts[0] === 'about') {
            renderAboutPage();
        } else {
            mainContent.innerHTML = '<p>Page not found.</p>';
        }
    }

    // --- Event Listeners ---
    window.addEventListener('hashchange', router);

    // --- Initial Load ---
    renderCategoryNav(); // Add category links to header
    router(); // Call router on initial page load
});
