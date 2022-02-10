const Conversation = require('./../models/Conversation');
exports.postConversation = async (req, res) => {
  try {
    const conversation = new Conversation(req.body);
    const savedConversation = await conversation.save();
    res.status(200).json(savedConversation);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.getConversation = async (req, res) => {
  try {
    const conversations = await Conversation.find({ memberIds: { $in: req.body.userId } });
    res.status(200).json(conversations);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.putConversation = async (req, res) => {
  try {
    const conversation = await Conversation.findOne({
      memberIds: { $all: [req.body.senderId, req.body.receiverId] },
    });
    res.status(200).json(conversation);
  } catch (error) {
    res.status(500).json(error);
  }
};
