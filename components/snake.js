const Snake = {
    template: '#Snake',
    delimiters: ['[[', ']]'],
    props: ['baseUrl'],
    data() {
        return {
            board: false,
            sources: [
                '/assets/images/snake-game.png',
            ],
            content: {
            }
        };
    },
    computed: {
        images() {
            const base = this.baseUrl || '';
            return this.sources.map(img => base + img);
        }
    },
    methods: {
        // async loadMarkdown(file) {
        //     const res = await fetch(`${baseUrl}/assets/snake/${file}`);
        //     return marked.parse(await res.text());
        // }
    },
    async mounted() {
    }
};
