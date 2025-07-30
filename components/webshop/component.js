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
            }
        };
    },
    methods: {
        async loadMarkdown(file) {
            const res = await fetch(`${BASE_URL}/components/webshop/md/${file}`);
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
