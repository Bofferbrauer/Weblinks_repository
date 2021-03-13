// testing that the script is linked correctly:
// for (let i = 100; i >= 0; i -= 10) {
//     console.log(i)
// }
import { articlesArray } from "./dataEN.js";
// creating the placeholders
const app = Vue.createApp({
    data() {
        return {
            title: "Title",
            paragraph1: "Paragraphe 1",
            paragraph2: "Paragraphe 2",
            paragraph3: "Paragraphe 3",

        };
    },

    methods: {
        async getArticleData() {
            console.log();
            //Fetch the data and convert to JSON
            const myArticle = articlesArray.map();

            this.title = myArticle.title;
            this.paragraph1 = myArticle.paragraph1;
            this.paragraph2 = myArticle.paragraph2;
            this.paragraph3 = myArticle.paragraph3;
        },
    },

    mounted() {
        this.getArticleData();
    },
});
app.mount("#mainapp");