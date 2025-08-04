const Tile = {
    template: '#Tile',
    delimiters: ['[[', ']]'],
    props: ['title', 'subtitle', 'tags', 'icon', 'color', 'images'],
    data() {
        return {
            showGallery: false
        };
    }
};
