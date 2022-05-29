const mongoose = require('mongoose');
const User = require('./models/User');
const Message = require('./models/Message');
const Chat = require('./models/Chat');
const Activity = require('./models/Activity');
const News = require('./models/News');
const Fact = require('./models/Fact');
const Guide = require('./models/Guide');
mongoose.connect(
  'mongodb+srv://hyfuser:hyfpassword@cluster0.yxgm2.mongodb.net/NlLink?retryWrites=true&w=majority',
  () => console.log('connected'),
  (e) => console.log(e),
);

seedDatabase();
async function seedDatabase() {
  try {
    const user = await User.create({
      name: {
        first: 'sina',
        last: 'Gholipour',
      },
      userName: 'sinaboby',
      password: 1234,
      userType: 'admin',
      email: 'sina@yahoo.com',
      phoneNumber: 'st34591',
      birthDay: '12-10-1991',
      isActive: true,
    });
    const chat = await Chat.create({
      users: ['6292aebdb7382949a685dab7', '6292ae463c5ca3aa8bc73495'],
    });

    const message = await Message.create({
      sender: '6292aef849f185a5dfc62379',
      receiver: '6292aef849f185a5dfc62379',
      body: 'Hi! World.',
      seen: false,
      edited: false,
    });

    const activity = await Activity.create({
      title: 'running',
      category: 'sport',
      createdBy: '6292ae463c5ca3aa8bc73495',
      startAt: new Date(),
      endAt: new Date(),
      description: 'It gonna be fun',
      joinedBy: ['6292ae463c5ca3aa8bc73495', '6292ad26c595146e25b9e544'],
      location: {
        city: 'amsterdam',
        street: 'naritaweg',
        postCode: '123',
      },
      maxPeople: 10,
    });
    const news = await News.create({
      title: 'windy weather',
      content: 'today was so windy',
      sources: ['google.com', 'hyf.com'],
      category: 'society',
    });
    const fact = await Fact.create({
      title: 'windy weather',
      content: 'today was so windy',
      sources: ['google.com', 'hyf.com'],
      category: 'working',
    });
    const guide = await Guide.create({
      title: 'windy weather',
      content: 'today was so windy',
      sources: ['google.com', 'hyf.com'],
      category: 'finance',
    });
  
    user.save();
    chat.save();
    activity.save();
    message.save();
    news.save();
    fact.save();
    guide.save();

    console.log(user);
    console.log(message);
    console.log(chat);
    console.log(activity);
    console.log(news);
    console.log(fact);
    console.log(guide)
  } catch (e) {
    console.log(e.message);
  }
}
