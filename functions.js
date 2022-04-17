
const username = 'mkalmo';
const baseUrl = `https://enos.itcollege.ee/~makalm/icd0007/foorum/api.php?username=${username}`;

export default async function main() {
    console.log(await getAllPosts());
}

function getAllPosts() {
    let url = baseUrl + '&cmd=find-posts'

    return fetch(url).then(response => response.json());
}
