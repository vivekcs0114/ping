## Quickstart

```sh
  git clone https://github.com/vivekcs0114/ping.git
  cd ping
  npm install
  npm run start
```
### `Docker Run`

## Build docker image -

docker build -t ping .

## Run docker image -

docker run --name ping -p 8000:8000 -d ping

Open [http://localhost:8000/ping](http://localhost:8000/ping) to view it in the browser.
