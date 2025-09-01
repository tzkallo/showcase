const Dwh = {
    template: '#Dwh',
    delimiters: ['[[', ']]'],
    data() {
        return {
            technologies: [
                { name: 'PostgreSQL', color: 'blue darken-2' },
                { name: 'dbt', color: 'teal darken-1' },
                { name: 'Airflow', color: 'cyan darken-2' },
                { name: 'Streamlit', color: 'orange lighten-1' },
                { name: 'Redash', color: 'deep-purple accent-3' },
                { name: 'Docker', color: 'blue darken-3' },
            ]
        }
    }
};
