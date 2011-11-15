mxn.register('leaflet', {    

Mapstraction: {
    
    init: function(element, api) {
        var me = this;
        var map = new L.Map(element.id, {
            zoomControl: false
        });
        this.layers = {};
        this.proprietary_bubbles = [];
        this.maps[api] = map;
        this.loaded[api] = true;
    },
    
    applyOptions: function(){
        return false;
    },

    resizeTo: function(width, height){    
        this.currentElement.style.width = width;
        this.currentElement.style.height = height;
    },

    addControls: function() {
        var map = this.maps[this.api];
        var zoom = new L.Control.Zoom();
        map.addControl(zoom);
        layersControl = new L.Control.Layers(this.layers, this.proprietary_bubbles);
        map.addControl(layersControl);
    },

    addSmallControls: function() {
        this.addControls();
    },

    addLargeControls: function() {
        throw 'Not implemented';
    },

    addMapTypeControls: function() {
        throw 'Not implemented';
    },

    setCenterAndZoom: function(point, zoom) { 
        var map = this.maps[this.api];
        var pt = point.toProprietary(this.api);
        map.setView(pt, zoom); 
    },
    
    addMarker: function(marker, old) {
        var map = this.maps[this.api];
        var pin = marker.toProprietary(this.api);
        map.addLayer(pin)
        return pin;
    },

    removeMarker: function(marker) {
        var map = this.maps[this.api];
        map.removeLayer(marker.proprietary_marker);
    },
    
    declutterMarkers: function(opts) {
        throw 'Not implemented';
    },

    addPolyline: function(polyline, old) {
//        var map = this.maps[this.api];
//        gpolyline = polyline.toProprietary(this.api);
//        map.addOverlay(gpolyline);
//        
//        GEvent.addListener(gpolyline, 'click', function() {
//            polyline.click.fire();
//        });
//        return gpolyline;
    },

    removePolyline: function(polyline) {
//        var map = this.maps[this.api];
//        map.removeOverlay(polyline.proprietary_polyline);
    },

    getCenter: function() {
        var map = this.maps[this.api];
        var pt = map.getCenter();
        return new mxn.LatLonPoint(pt.lat, pt.lng);
    },

    setCenter: function(point, options) {
        var map = this.maps[this.api];
        var pt = point.toProprietary(this.api);
        if(options && options.pan) { 
            map.panTo(pt); 
        }
        else { 
            map.setView(pt, map.getZoom(), true);
        }
    },

    setZoom: function(zoom) {
        var map = this.maps[this.api];
        map.setZoom(zoom);
    },
    
    getZoom: function() {
        var map = this.maps[this.api];
        return map.getZoom();
    },

    getZoomLevelForBoundingBox: function( bbox ) {
//        var map = this.maps[this.api];
//        // NE and SW points from the bounding box.
//        var ne = bbox.getNorthEast();
//        var sw = bbox.getSouthWest();
//        var gbox = new GLatLngBounds( sw.toProprietary(this.api), ne.toProprietary(this.api) );
//        var zoom = map.getBoundsZoomLevel( gbox );
//        return zoom;
    },

    setMapType: function(type) {
        throw 'Not implemented';
    },

    getMapType: function() {
        throw 'Not implemented';
    },

    getBounds: function () {
        var map = this.maps[this.api];
        var ne, sw, nw, se;
        var gbox = map.getBounds();
        sw = gbox.getSouthWest();
        ne = gbox.getNorthEast();
        return new mxn.BoundingBox(sw.lat(), sw.lng(), ne.lat(), ne.lng());
    },

    setBounds: function(bounds){
//        var map = this.maps[this.api];
//        var sw = bounds.getSouthWest();
//        var ne = bounds.getNorthEast();
//        var gbounds = new GLatLngBounds(new GLatLng(sw.lat,sw.lon),new GLatLng(ne.lat,ne.lon));
//        map.setCenter(gbounds.getCenter(), map.getBoundsZoomLevel(gbounds)); 
    },

    addImageOverlay: function(id, src, opacity, west, south, east, north) {
        throw 'Not implemented';
    },

    setImagePosition: function(id, oContext) {
        throw 'Not implemented';
    },
    
    addOverlay: function(url, autoCenterAndZoom) {
        throw 'Not implemented';
    },

    addTileLayer: function(tile_url, options) {
        if (options && options.name) {
            var layerName = options.name;
            delete options.name;
        } else {
            var layerName = 'Tiles'
        }
        this.layers[layerName] = new L.TileLayer(tile_url, options || {});
        var map = this.maps[this.api];
        map.addLayer(this.layers[layerName]);
    },

    toggleTileLayer: function(tile_url) {
        throw 'Not implemented';
    },

    getPixelRatio: function() {
        throw 'Not implemented';
    },
    
    mousePosition: function(element) {
        throw 'Not implemented';
    },

    openBubble: function(point, content) {
        var map = this.maps[this.api];
        var point = point.toProprietary(this.api);
        var marker = new L.Marker(point);
        marker.bindPopup(content);
        map.addLayer(marker);
        marker.openPopup();
    },

    closeBubble: function() {
        var map = this.maps[this.api];
        map.closePopup();
    }
},

LatLonPoint: {
    
    toProprietary: function() {
        return new L.LatLng(this.lat,this.lon);
    },

    fromProprietary: function(point) {
        this.lat = point.lat();
        this.lon = point.lng();
    }
    
},

Marker: {
    
    toProprietary: function() {
        return new L.Marker(this.location.toProprietary('leaflet'));
    },

    openBubble: function() {
        var pin = this.proprietary_marker;
        if (this.infoBubble) {
            pin.bindPopup("<b>Hello world!</b><br />I am a popup.");
            pin.openPopup();
        }
    },
    
    closeBubble: function() {
        var pin = this.proprietary_marker;
        pin.closePopup();
    },

    hide: function() {
        //this.proprietary_marker.hide();
    },

    show: function() {
        //this.proprietary_marker.show();
    },
    
    isHidden: function() {
        //return this.proprietary_marker.isHidden();
    },

    update: function() {
        point = new mxn.LatLonPoint();
        point.fromProprietary('leaflet', this.proprietary_marker.getPoint());
        this.location = point;
    }
    
},

Polyline: {

    toProprietary: function() {
//        var gpoints = [];
//        for (var i = 0,  length = this.points.length ; i< length; i++){
//            gpoints.push(this.points[i].toProprietary('leaflet'));
//        }
//        if (this.closed) {
//            return new GPolygon(gpoints, this.color, this.width, this.opacity, this.fillColor || "#5462E3", this.fillOpacity || 0.3);
//        } else {
//            return new GPolyline(gpoints, this.color, this.width, this.opacity);
//        }
    },
    
    show: function() {
//        var pl = this.proprietary_polyline;
//        if (pl.supportsHide()) {
//            pl.show();
//        }
    },

    hide: function() {
//        var pl = this.proprietary_polyline;
//        if (pl.supportsHide()) {
//            pl.hide();
//        }
    },
    
    isHidden: function() {
//        return this.proprietary_polyline.isHidden();
    }
}

});
