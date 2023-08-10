import "./style.css";
const sleep = time => new Promise(fulfill => setTimeout(fulfill, time * 1000));

const button = document.getElementById("button");

const link = document.getElementsByClassName("link")[0];
const error = document.getElementsByClassName("error")[0];

let loading;

button.addEventListener("click", async e => {
    if(!loading) {
        button.style.setProperty("pointer-events", "none");
        button.innerHTML = `<span class="loader"></span>`;
        const result = await fetch(window.location.href + "create").catch(err => {});
        if(result?.status == 200) {
            await sleep(1);

            button.innerHTML = "Create Server";
            button.classList.add("disabled");

            link.style.setProperty("display", "flex");
            document.querySelector("body > div > div > div > div.embed-content > div.button-reply.link > div > a").setAttribute("href", `https://discord.gg/${await result.text()}`);
        } else {
            await sleep(1);

            button.innerHTML = "Create Server";
            error.style.setProperty("display", "flex");
            button.style.setProperty("pointer-events", "auto");
            console.log(result);

            await sleep(7);
            error.style.setProperty("display", "none");
        }
    }
});