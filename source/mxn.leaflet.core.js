mxn.register('leaflet', {    

Mapstraction: {
    
    init: function(element, api) {
        var me = this;
        var map = new L.Map(element.id);
        // initialize layers map (this was previously in mxn.core.js)
        this.layers = {};
        // holder for all info bubbles
        this.proprietary_bubbles = [];
        // default road map: Google 
        this.layers.road = new L.TileLayer("http://{s}.google.com/vt/?hl=en&x={x}&y={y}&z={z}&s={s}", {
             attribution: "Map data: Copyright Google, 2011",
             subdomains: ['mt0','mt1','mt2','mt3']
        });
        map.addLayer(this.layers.road);

        // Finishing touches
        this.maps[api] = map;
        this.loaded[api] = true;
    },
    
    applyOptions: function(){
        
    },

    resizeTo: function(width, height){    
//        this.currentElement.style.width = width;
//        this.currentElement.style.height = height;
//        this.maps[this.api].checkResize(); 
    },

    addControls: function( args ) {
        
    },

    addSmallControls: function() {
//        var map = this.maps[this.api];
//        this.controls.unshift(new GSmallMapControl());
//        map.addControl(this.controls[0]);
//        this.addControlsArgs.zoom = 'small';
//        this.addControlsArgs.pan = true;
    },

    addLargeControls: function() {
//        var map = this.maps[this.api];                
//        this.controls.unshift(new GLargeMapControl());
//        map.addControl(this.controls[0]);
//        this.addControlsArgs.zoom = 'large';
//        this.addControlsArgs.pan = true;
    },

    addMapTypeControls: function() {
//        var map = this.maps[this.api];
//        this.controls.unshift(new GMapTypeControl());
//        map.addControl(this.controls[0]);
//        this.addControlsArgs.map_type = true;
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
        var point = new mxn.LatLonPoint(pt.lat(),pt.lng());
        return point;
    },

    setCenter: function(point, options) {
//        var map = this.maps[this.api];
//        var pt = point.toProprietary(this.api);
//        if(options && options.pan) { 
//            map.panTo(pt); 
//        }
//        else { 
//            map.setCenter(pt);
//        }
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
//        var map = this.maps[this.api];
//        switch(type) {
//            case mxn.Mapstraction.ROAD:
//                map.setMapType(G_NORMAL_MAP);
//                break;
//            case mxn.Mapstraction.SATELLITE:
//                map.setMapType(G_SATELLITE_MAP);
//                break;
//            case mxn.Mapstraction.HYBRID:
//                map.setMapType(G_HYBRID_MAP);
//                break;
//            case mxn.Mapstraction.PHYSICAL:
//                map.setMapType(G_PHYSICAL_MAP);
//                break;
//            default:
//                map.setMapType(type || G_NORMAL_MAP);
//        }
    },

    getMapType: function() {
//        var map = this.maps[this.api];
//        var type = map.getCurrentMapType();
//        switch(type) {
//            case G_NORMAL_MAP:
//                return mxn.Mapstraction.ROAD;
//            case G_SATELLITE_MAP:
//                return mxn.Mapstraction.SATELLITE;
//            case G_HYBRID_MAP:
//                return mxn.Mapstraction.HYBRID;
//            case G_PHYSICAL_MAP:
//                return mxn.Mapstraction.PHYSICAL;
//            default:
//                return null;
//        }
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
//        var map = this.maps[this.api],
//            imageBounds = new GLatLngBounds(
//                new GLatLng(south,west),
//                new GLatLng(north,east)
//            ),
//            overlay = new GGroundOverlay(src, imageBounds);
//        map.addOverlay(overlay);
    },

    setImagePosition: function(id, oContext) {
        // do nothing
    },
    
    addOverlay: function(url, autoCenterAndZoom) {
//        var map = this.maps[this.api];
//        var geoXML = new GGeoXml(url);
//        if(autoCenterAndZoom) {
//            GEvent.addListener( geoXML, 'load', function() { geoXML.gotoDefaultViewport(map); } );
//        }
//        map.addOverlay(geoXML);
    },

    addTileLayer: function(tile_url, opacity, copyright_text, min_zoom, max_zoom, map_type) {
//        var copyright = new GCopyright(1, new GLatLngBounds(new GLatLng(-90,-180), new GLatLng(90,180)), 0, "copyleft");
//        var copyrightCollection = new GCopyrightCollection(copyright_text);
//        copyrightCollection.addCopyright(copyright);
//        var tilelayers = [];
//        tilelayers[0] = new GTileLayer(copyrightCollection, min_zoom, max_zoom);
//        tilelayers[0].isPng = function() {
//            return true;
//        };
//        tilelayers[0].getOpacity = function() {
//            return opacity;
//        };
//        tilelayers[0].getTileUrl = function (a, b) {
//            url = tile_url;
//            url = url.replace(/\{Z\}/g,b);
//            url = url.replace(/\{X\}/g,a.x);
//            url = url.replace(/\{Y\}/g,a.y);
//            return url;
//        };
//        if(map_type) {
//            var tileLayerOverlay = new GMapType(tilelayers, new GMercatorProjection(19), copyright_text, {
//                errorMessage:"More "+copyright_text+" tiles coming soon"
//            });        
//            this.maps[this.api].addMapType(tileLayerOverlay);
//        } else {
//            tileLayerOverlay = new GTileLayerOverlay(tilelayers[0]);
//            this.maps[this.api].addOverlay(tileLayerOverlay);
//        }        
//        this.tileLayers.push( [tile_url, tileLayerOverlay, true] );
//        return tileLayerOverlay;
    },

    toggleTileLayer: function(tile_url) {
//        for (var f=0; f<this.tileLayers.length; f++) {
//            if(this.tileLayers[f][0] == tile_url) {
//                if(this.tileLayers[f][2]) {
//                    this.maps[this.api].removeOverlay(this.tileLayers[f][1]);
//                    this.tileLayers[f][2] = false;
//                }
//                else {
//                    this.maps[this.api].addOverlay(this.tileLayers[f][1]);
//                    this.tileLayers[f][2] = true;
//                }
//            }
//        }
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
