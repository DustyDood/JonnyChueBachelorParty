window.geolocationInterop = {
    getCurrentPosition: function (options, dotNetHelper) {
        if (!navigator.geolocation) {
            dotNetHelper.invokeMethodAsync('ReceiveError', 'Geolocation is not supported.');
            return;
        }

        navigator.geolocation.getCurrentPosition(
            function (position) {
                dotNetHelper.invokeMethodAsync('ReceivePosition', {
                    Latitude: position.coords.latitude,
                    Longitude: position.coords.longitude,
                    Accuracy: position.coords.accuracy
                });
            },
            function (error) {
                dotNetHelper.invokeMethodAsync('ReceiveError', error.message);
            },
            options
        );
    }
};
