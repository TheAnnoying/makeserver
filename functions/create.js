const newRequest = async ({ request }) => {
    let response;

    const token = process.env.DISCORD_TOKEN;
    const headers = {
        "Content-Type": "application/json",
        Authorization: `Bot ${token}`
    };

    await fetch("https://discord.com/api/v9/guilds/templates/eQWnDVBsfc5a", {
        method: "POST",
        headers,
        body: JSON.stringify({
            name: "Template",
            guild_template_code: `eQWnDVBsfc5a`,
        })
    }).then(async res => await res.json()).then(async data => {
        const id = await fetch(`https://discord.com/api/v9/guilds/${data.id}/channels`, {
            method: "GET",
            headers
        }).then(async res => await res.json());

        await fetch(`https://discord.com/api/v9/channels/${id[6].id}/invites`, {
            method: "POST",
            headers,
            body: JSON.stringify({})
        }).then(async res => await res.json()).then(data => {
            if(data?.code) {
                return response = new Response(data.code, { status: 200 });
            } else {
                return response = new Response("bruh", { status: 403 }).headers.set("Access-Control-Allow-Origin", "http://localhost:5173");
            }
        });
    });

    response.headers.set("Access-Control-Allow-Origin", "*");

    response.headers.set("Access-Control-Allow-Methods", "GET");
    response.headers.set("Access-Control-Allow-Headers", "Content-Type");

    return response;
}

export const onRequest = [newRequest];