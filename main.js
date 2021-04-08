window.onload = init



function init() {
    const map = new ol.Map({
        view: new ol.View({
            // x and y coords
            center: [-12080385, 7567433],

            zoom: 2,
            maxZoom: 6,
            minZoom: 2,
            rotation: 0,


        }),
        layers: [
            new ol.layer.Tile({
                source: new ol.source.OSM()
            })
        ],
        target: "js-map",
        keyboardEventTarget: document
    })

    const popupContainerELement = document.getElementById('popup-coordinates');

    const popup = new ol.Overlay({
        element: popupContainerELement,
        positioning: 'center-center',
    })

    map.addOverlay(popup);

    map.on('click', (e) => {
            console.log(e.coordinate)
            const clickedCoordinate = e.coordinate;
            // popup.setPosition(undefined)
            popup.setPosition(clickedCoordinate)
            popupContainerELement.innerHTML = clickedCoordinate;


        })
        //  DragRotate
    const dragRotateInteraction = new ol.interaction.DragRotate({
        condition: ol.events.condition.altKeyOnly
    })

    map.addInteraction(dragRotateInteraction)

    const drawInteraction = new ol.interaction.Draw({
        type: 'Polygon'
    })

    map.addInteraction(drawInteraction)


}