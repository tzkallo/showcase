const Webshop = {
    template: '#Webshop',
    delimiters: ['[[', ']]'],
    data() {
        return {
            step: 1,
            content: {
                user_story: '',
                scopes: '',
                analysis: '',
                test_case: '',
                test_result: '',
            },
            technologies: [
                { name: 'PostgreSQL', color: 'blue darken-2' },
                { name: 'Django', color: 'green darken-2' },
                { name: 'Django REST framework', color: 'teal darken-1' },
                { name: 'Vue', color: 'green lighten-1' },
                { name: 'Vuex', color: 'cyan darken-2' },
                { name: 'Vuetify', color: 'deep-purple accent-3' },
                { name: 'Vue i18n', color: 'light-blue darken-1' },
                { name: 'HTML', color: 'orange darken-2' },
                { name: 'CSS', color: 'red lighten-1' },
                { name: 'Docker', color: 'blue darken-3' },
            ]
        }
    },
    methods: {
        async loadMarkdown(file) {
            const res = await fetch(`${BASE_URL}/assets/webshop/${file}`);
            return marked.parse(await res.text());
        }
    },
    async mounted() {
        this.content.user_story = await this.loadMarkdown('user_story.md');
        this.content.scopes = await this.loadMarkdown('test_scopes.md');
        this.content.analysis = await this.loadMarkdown('test_analysis.md');
        this.content.test_case = await this.loadMarkdown('test_case.md');
        this.content.test_result = await this.loadMarkdown('test_result.md');
    }
};
