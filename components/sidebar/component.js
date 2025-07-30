const Sidebar = {
    template: '#Sidebar',
    delimiters: ['[[', ']]'],
    props: ['pages', 'current'],
    methods: {
        clickPage(index) {
            this.$emit('change', index);
        }
    }
};
