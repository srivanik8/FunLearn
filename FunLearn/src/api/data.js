// api/data.js
import express from "express";
import mongoose from "mongoose";
const app = express();

mongoose.connect('mongodb+srv://user1:user1@cluster0.mjhxi0m.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {useNewUrlParser: true, useUnifiedTopology: true});

    app.get('/api/data', async (req, res) => {
        const QuizSetSchema = new mongoose.Schema({
        id: String,
        title: String,
        url: String,
        });

        const QuizSchema = new mongoose.Schema({
        id: String,
        quizset_id: String,
        question: String,
        answer_index: Number,
        explanation: String,
        });

        const QuizOptionSchema = new mongoose.Schema({
        id: String,
        quiz_id: String,
        index: Number,
        text: String,
        });

        const QuizSet = mongoose.model('QuizSet', QuizSetSchema);
        const Quiz = mongoose.model('Quiz', QuizSchema);
        const QuizOption = mongoose.model('QuizOption', QuizOptionSchema);

module.exports = async (req, res) => {
    const QuizSet = mongoose.model('QuizSet', QuizSetSchema);
    const Quiz = mongoose.model('Quiz', QuizSchema);
    const QuizOption = mongoose.model('QuizOption', QuizOptionSchema);
  res.json(quizSets);
};
    });
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });