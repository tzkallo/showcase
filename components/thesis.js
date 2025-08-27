const Thesis = {
    template: '#Thesis',
    delimiters: ['[[', ']]'],
    props: ['baseUrl'],
    data() {
        return {
            board: false,
            sources: [
                '/assets/thesis/fig_5_0_2_a.png',
                '/assets/thesis/DEER_bm99_si.png',
                '/assets/thesis/DEER_bm99_pi.png',
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
        //     const res = await fetch(`${BASE_URL}/assets/thesis/${file}`);
        //     return marked.parse(await res.text());
        // }
    },
    async mounted() {
    }
};
