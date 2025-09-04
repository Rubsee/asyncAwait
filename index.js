import axios from "axios";

const promise = new Promise((resolve) => {
    setTimeout(() => {
        resolve(axios.get('https://icherniakov.ru/yt-course/account/test_accounts', {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                }
            }).then(res => {
                console.log(res);
            })
        )
    }, 4000)
})


async function main() {
    console.log(1)
    console.log(2)
    console.log(3)
    console.log(4)
    console.log(5)
    await promise
    console.log(6)
    console.log(7)
    console.log(8)
    console.log(9)
    console.log(10)
}

main();