Mongoose Multi Set Plugin
==========================

Simple plugin for [Mongoose](https://github.com/LearnBoost/mongoose) which adds the `multiSet()` method to models. Useful when you want to set more values in the model at once.
The plugin doesn't interfere with the validation rules in the model, unlike the Model.update() function or the Schema.findByIdAndUpdate(). This plugin doesn't save the model either,
this is the job of the calling code.

## Installation

`npm install mongoose-multi-set --save`

## Usage

model.multiSet(`{object}`, `[allowed fields]`);

Where `{object}` is an object like {field1: value1, field2: value2,...} with fields to set and their values.
`[allowed fields]` is an array of fields from the `{object}` that are allowed to be set in the model.
You'd use this plugin to update the model from, say, req.query, when you have proper validation in place.

```javascript
var UserSchema = new Schema({
    username: String,
    name: String,
    age: Number
});
UserSchema.plugin(require('mongoose-multi-set'));
var user = mongoose.model('User', UserSchema);
// say req.query is {username: 'Foo', name: 'Bar', age: 25}
user.multiSet(req.query, ['username', 'age']);
user.save();
```
The User model will now have the `username` and `age` properties set from req.query.

 - The plugin doesn't let you update the `id` or `_id` properties of the model. If you really want to update the id of the model, you can do so manually ;)
 - The `allowed fields` parameter is required to make sure only the desired fields are updated


## License

(The MIT License)

Copyright (c) 2013 Dan Caragea &lt;dancaragea@gmail.com&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.