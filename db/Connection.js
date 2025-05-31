const mongoose = require('mongoose');
//creates singleton object, meaning all require('mongoose') calls share the same instance.
//so only ever one instance.

mongoose.connect('mongodb+srv://jonathan04gutierrez:FlushOS12@flushdata.cexykn4.mongodb.net/?retryWrites=true&w=majority&appName=FlushData',
    {
        useNewUrlParser: true,
        useUnifiedToplogy: true
    })
.then(() => console.log('MongoDB connected!'))
.catch(err => console.error('MongoDB connection error:', err));

module.exports = mongoose;
//you dont need to do this since its global, but if you plan on multipel databses, then you know
//than youve connected to the right db once called.