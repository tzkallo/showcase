const Plc = {
    template: '#Plc',
    delimiters: ['[[', ']]'],
    data() {
        return {
            board: false,
            content: {
            }
        };
    },
    methods: {
        async loadMarkdown(file) {
            const res = await fetch(`${BASE_URL}/assets/plc/${file}`);
            return marked.parse(await res.text());
        }
    },
    async mounted() {
    }
};
