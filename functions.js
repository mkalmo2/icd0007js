
const username = '...';
const baseUrl = `https://enos.itcollege.ee/~makalm/icd0007/foorum/api.php?username=${username}`;

export default async function main() {

    console.table(await getAllPosts());

}

async function getAllPosts() {
    let url = `${baseUrl}&cmd=find-posts`;

    const response = await fetch(url)

    return response.json();
}
