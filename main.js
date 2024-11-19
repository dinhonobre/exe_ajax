document.addEventListener('DOMContentLoaded', () => {
    const username = 'dinhonobre';
    const apiUrl = `https://api.github.com/users/${username}`;

    const avatarElement = document.getElementById('avatar');
    const nameElement = document.getElementById('name');
    const usernameElement = document.getElementById('username');
    const reposElement = document.getElementById('repos');
    const followersElement = document.getElementById('followers');
    const followingElement = document.getElementById('following');
    const profileLinkElement = document.getElementById('profile-link');

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) throw new Error('Erro ao buscar dados do GitHub.');
            return response.json();
        })
        .then(data => {
            avatarElement.src = data.avatar_url;
            nameElement.textContent = data.name || 'Nome não disponível';
            usernameElement.textContent = `@${data.login}`;
            reposElement.textContent = data.public_repos;
            followersElement.textContent = data.followers;
            followingElement.textContent = data.following;
            profileLinkElement.href = data.html_url;
        })
        .catch(error => console.error('Erro:', error));
});
