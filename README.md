# Demo Tower.js Application

## Install

First, install tower.js.

```bash
sudo npm install tower -g
```

This will give you access to the `tower` binary.

Clone this repo:

```bash
git clone git@github.com:TheHydroImpulse/tower-demo-app.git
cd tower-demo-app
tower install
tower # Run the tower server.
```

## Production

```bash
# This will generate a nginx.conf for serving static files
# And this will build the static files from each module into a simple bundle.
tower build 
```

Run nginx:

```bash
sudo nginx -c nginx.conf
```

Run the production server:

```bash
tower server --production
```

Or with `NODE_ENV`

```bash
NODE_ENV=production tower
```

# License

MIT
