
const username = 'mkalmo';
const baseUrl = `https://enos.itcollege.ee/~makalm/icd0007/foorum/api.php?username=${username}`;

export default async function main() {
    console.table(await getAllPosts());

    // console.log(await savePost({}));
    // console.log(await savePost({ title: 'test', content1: 'test' }));
    // console.log(await deletePost(3));
    // console.log(await findPostByTitle('test'));

    // let post = await findPostByTitle('test');
    // console.log(post.id);
    // await deletePost(post.id);
}

function getAllPosts() {
    let url = baseUrl + '&cmd=find-posts'

    return fetch(url).then(response => response.json());
}

function findPostByTitle(title) {
    let url = baseUrl + '&cmd=find-post-by-title&title=' + title;

    return fetch(url).then(response => response.json());
}

async function savePost(post) {
    const url = baseUrl + '&cmd=save-post'

    const response = await fetch(url, {
        method: 'POST',
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(post)
    });

    return response.status === 400
        ? await response.json()
        : [];
}

function deletePost(id) {
    let url = baseUrl + '&cmd=delete-post-by-id&id=' + id;

    return fetch(url, {
        method: 'POST',
        headers: { "Content-type": "application/json" }
    }).then(response => response.json());
}
