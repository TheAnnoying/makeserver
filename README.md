# makeserver
> Test website that creates Discord servers

Includes fake Discord components, uses the Discord API and has its own small API with one endpoint.

## Usage
As this is just a test, I've deployed the website on Cloudflare pages, but you will not be able to create servers.

You may visit that site if you'd like to see how it's designed.

[Website Link](https://makeserver.theannoying.dev)

## Self Deployment
```
git clone https://github.com/TheAnnoying/makeserver.git
```
```
cd makeserver
```
```
npm install
```

In order to test out both the website and the API, run two terminals.

<details>
<summary>Running the website</summary>
<br>

```
npm run dev
```
Live on [http://localhost:5173](http://localhost:5173)
</details>

<details>
<summary>Running the API</summary>
<br>

```
npm install -g wrangler
```
```
wrangler.cmd pages dev .
```
Live on [http://localhost:8788](http://localhost:8788)
</details>
<br>

Thanks [Ewan Howell](https://ewanhowell.com) for the help with the Discord-like components.