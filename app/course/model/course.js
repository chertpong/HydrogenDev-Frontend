var Course = (function () {
    function Course(id, name, duration, price, description, thumbnail, tags) {
        this._id = id;
        this._name = name;
        this._duration = duration;
        this._price = price;
        this._description = description;
        this._thumbnail = thumbnail;
        this._tags = tags;
    }
    Object.defineProperty(Course.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Course.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Course.prototype, "duration", {
        get: function () {
            return this._duration;
        },
        set: function (value) {
            this._duration = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Course.prototype, "price", {
        get: function () {
            return this._price;
        },
        set: function (value) {
            this._price = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Course.prototype, "description", {
        get: function () {
            return this._description;
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Course.prototype, "thumbnail", {
        get: function () {
            return this._thumbnail;
        },
        set: function (value) {
            this._thumbnail = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Course.prototype, "tags", {
        get: function () {
            return this._tags;
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: true,
        configurable: true
    });
    return Course;
})();
exports.Course = Course;
//# sourceMappingURL=course.js.map