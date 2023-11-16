# .

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```
  html
	<img :src="currentFlag" @error="toDefSrc()">
 js
	...
	props: {
        ...
        original_language: String,
    	}
	...
	data() {
        return {
            currentFlag: ''
        },
	...
	methods:{
	toDefSrc() {
		// to replace with a no-found-flag flag
           	this.currentFlag = 'https://flagsapi.com/' + 'GB' + '/flat/64.png';
		}
        }
	computed: {
        getFlagUrl() {
            let parsedString = this.original_language.toUpperCase().substring(0, 2)
            if (parsedString === "EN") {
                parsedString = "GB"
            } // handling most common mistake
            this.currentFlag = 'https://flagsapi.com/' + parsedString + '/flat/64.png';
        },
    }
'images/' + movie.original_language + '.svg'













