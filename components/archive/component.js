const Archive = {
    template: '#Archive',
    delimiters: ['[[', ']]'],
    data() {
        return {
            content: {
                thesis: '',
            }
        };
    },
    methods: {
        async loadMarkdown(file) {
            const res = await fetch(`${BASE_URL}/components/archive/md/${file}`);
            return marked.parse(await res.text());
        }
    },
    async mounted() {
        this.content.thesis = await this.loadMarkdown('thesis.md');
    }
};
