// SAMPLE
this.manifest = {
    "name": "Poche",
    "icon": "../assets/48x48.png",
    "settings": [
        {
            "tab": i18n.get("Poche configuration"),
            "group": i18n.get("Server information"),
            "name": "base_url",
            "type": "text",
            "label": i18n.get("Base URL"),
            "text": i18n.get("x-url")
        },
        {
            "tab": i18n.get("Poche configuration"),
            "group": i18n.get("Server information"),
            "name": "myDescription",
            "type": "description",
            "text": i18n.get("description")
        },
    ],
    "alignment": [
        [
            "base_url"
        ]
    ]
};
