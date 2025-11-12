Etteantud kood on Html failide sees. Selliselt saate koodi käivitada
baruseris ja pole vaja JavaScripti käivitamiseks vajalikku tarkvara
paigaldada. console.log() lausete väljundit näete brauseri arendaja
tööriistade vaatest "Console" saki alt.

1.  Kirjutage kood, mis loeb mitu korda esineb number (mitte sõne) 3
    numbers listis ja väljastab tulemuse kujul "found it \<mitu korda\>
    times".

2.  Kirjutage funktsioon, mis võtab argumendiks numbrite listi ja
    tagastab listi, milles on esialgse listi paaritud arvud.

    getOddNumbers(\[1, 2, 3\]) tagastab \[1, 3\]

    kontrollimaks, kas number on paaritu, saame kontrollida, kas kahega
    jagamisel jääb jääk. 4 % 2 on 0 ja 3 % 2 on 1.

    1)  kasutage for tsüklit
    2)  kastuage listi meetodit filter()

3.  Kirjutage funktsioon isInList(list, elementToBeFound), mis ütleb kas
    listis on selline element või mitte.

    isInList(\[1, 2, 3\], 2) tagastab true; isInList(\[1, 2, 3\], 4)
    tagastab false;

    1)  kasutage for tsüklit
    2)  kastuage listi meetodit find() find() töötab nagu filter() aga
        tagastab ainult esimese tingimusele vastava kirje. Kui ühtegi
        sobivat kirjet ei leita, siis tagastatakse undefined.

4.  Tehke list, milles on kolm isiku objekti. Isikul on nimi ja kuitahes
    palju telefoninumbreid.

    Kirjutage funktsioon, mis võtab sisse isikute listi ja tagastab need
    isikud, kellel on etteantud telefoninumber.

    findPersonsByPhoneNumber(personList, phone);

5.  Kirjutage kood, mis teeb isiku objektist stringi (JSON) ja seejärel
    stringist isiku objekti tagasi.

6.  Aadressil
    https://enos.itcollege.ee/~makalm/icd0007/foorum/api.php?username=<Github'i kastuajanimi>
    on teenus, läbi mille saate foorumi rakendusega suhelda. NB!
    Github'i kastuajanime peate asendama enda omaga.

    Proovimiseks tehke GET päring aadressile:
    https://enos.itcollege.ee/~makalm/icd0007/foorum/api.php?username=<Github'i kastuajanimi>&cmd=find-posts

    Failis forum.html imporditakse functions.js fail ja käivitatakse
    selles olev main() meetod. See meetod loeb json kujul info ja trükib
    selle konsooli. Veenduge, et see kood töötab.

    Kasutage väljatrükiks meetodeid console.log() ja console.table().

7.  Tehke uus meetod nimega savePost(), mis võtab sisse postituse ja
    sisestab selle API kaudu foorumisse.

    Selleks peate tegema POST päringu parameetriga cmd=save-post ja
    kaasa peate andma postituse info kujul

    ```
    { title: "some title", content: "some content" }
    ```

    POST päringu tegemine käib nii:

    ```
    fetch(url, { method: "POST", 
                 headers: { "Content-type": "application/json" }, 
                 body: JSON.stringify(<saadetavad andmed>) });
    ```

8.  Tehke meetod deletePost(), mis võtab sisse ID ja kustutab vastava
    postituse.

    Selleks peate tegema POST päringu parameetritega
    cmd=delete-post-by-id&id=\<id\>.

9.  Tehke meetod findPostByTitle(), mis loeb postituse pealkirja järgi.

    Selleks peate tegema päringu parameetritega
    cmd=find-post-by-title&title=\<pealkiri\>.

10. Kirjutage kahe eelmise meetodi põhjal kood, mis kustutab postituse
    pealkirja järgi.

11. Kui üritada sisestada postitust, millel pole pealkirja või sisu,
    siis vastab teenus listiga, milles on veateated ja http tagastuskood
    on 400.

    Muutke savePost() meetodit nii, et vigade korral tagastaks see listi
    veakoodidega ja õnnestumise korral tühja listi.

    Seda, kas päring õnnestus või mitte, peaks kontrollima http koodi
    järgi.

    Http koodi saate nii

    const response = await fetch(...);

    console.log(response.status);

    ja sealt edasi tagastatud andmed nii

    data = await response.json();

Seletused ja lahendused: https://youtu.be/VnZhB90jUs4
