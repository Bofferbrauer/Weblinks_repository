for (let i = 100; i >= 0; i -= 10) {
    console.log(i)
}

constapp = Vue.createApp({
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

            const res = await fetch("dataEN.js");
            const jsonRes = await res.json();
            const myArticle = jsonRes.results;

            this.title = myArticle.title;
            this.paragraph1 = myArticle.paragraph1;
            this.paragraph2 = myArticle.paragraph2;
            this.paragraph3 = myArticle.paragraph3;
        }
    }
});
applicationCache.mount("#mainapp")