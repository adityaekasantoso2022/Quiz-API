const db = require('../models');
const Quiz = db.quizzes;

exports.create = async (req, res) => {
  try {
    const data = await Quiz.create(req.body);
    res.status(201).json({
      message: "Quiz created successfully",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      data: null,
    });
  }
};

exports.getAll = async (req, res) => {
    try {
        const quizzes = await Quiz.findAll();
        res.json({
            message: "Quizzes retrieved successfully",
            data: quizzes,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
            data: null,
        });
    }
};

exports.update = async (req, res) => {
    const id = req.params.id;
    try {
        const quiz = await Quiz.findByPk(id, { rejectOnEmpty: true });
        await quiz.update(req.body);
        res.json({
            message: "Quiz updated successfully",
            data: quiz,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message || "Some error occurred while updating quiz",
            data: null,
        });
    }
};

exports.delete = async (req, res) => {
    const id = req.params.id;
    try {
        const quiz = await Quiz.findByPk(id, { rejectOnEmpty: true });
        await quiz.destroy();
        res.json({
            message: "Quiz deleted successfully",
        });
    } catch (error) {
        res.status(500).json({
            message: error.message || "Some error occurred while deleting quiz",
            data: null,
        });
    }
};

exports.findOne = async (req,res)=> {
    const id = req.params.id
    try{
        const quiz = await Quiz.findByPk(id, {rejectOnEmpty: true})
        res.json({
            message:`Quizzes successfully with id= ${id}`,
            data: quiz,
        })
    } catch(error){
        res.status(500).json({
            message:error.message || "Some error occurred while retrieving quiz",
            data: null,
        });
    }
}

exports.getByCategoryId = async (req,res)=> {
    const id = req.params.id
    const quizzes = await Quiz.findAll({
        where:{
            categoryId: id  // Corrected field name to categoryId
        }
    })
    res.json({
        message:"Quizzes retrieved while retrieving quiz",
        data: quizzes,
    });
}

exports.getByLevelId = async (req,res)=> {
    const id = req.params.id
    const quizzes = await Quiz.findAll({
        where:{
            levelId: id
        }
    })
    res.json({
        message:`Quizzes retrieved successfully with levelId= ${id}`,
        data: quizzes,
    });
}
