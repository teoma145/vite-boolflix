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
 GetMoviesAndSeries(){
           const movieurl= this.store.apiUrl + this.store.endPoint.movies;
           axios.get(movieurl,{params:this.store.params}).then((response)=>{
            console.log(response.data.results);
            this.store.movieList=response.data.results;
           });
           const tvurl= this.store.apiUrl + this.store.endPoint.series;
           axios.get(tvurl,{params:this.store.params}).then((response)=>{
            console.log(response.data.results);
            this.store.seriesList=response.data.results;
           })
        
        }