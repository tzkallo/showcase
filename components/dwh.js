const Dwh = {
    template: '#Dwh',
    delimiters: ['[[', ']]'],
    props: ['baseUrl'],
    data() {
        return {
            board: false,
            sources: [
                '/assets/dwh/airflow.png',
                '/assets/dwh/dbt_run.png',
                '/assets/dwh/postgresql.png',
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
        async loadMarkdown(file) {
            const res = await fetch(`${BASE_URL}/assets/dwh/${file}`);
            return marked.parse(await res.text());
        }
    },
    async mounted() {
    }
};
