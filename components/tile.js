const Tile = {
    template: '#Tile',
    delimiters: ['[[', ']]'],
    props: ['title', 'subtitle', 'tags', 'icon', 'color'],
    data() {
        return {
            showGallery: false
        };
    }
};
