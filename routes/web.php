<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\QuestionsController;

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
Route::get('/get/question/list',
            [QuestionsController::class,'getQuestionList'])->name('question.list');