<?php


namespace App\Http\Controllers;
use Illuminate\Support\Facades\App;
use Auth;
use Illuminate\Http\Request;
use Log;
use Exception;
use App\Models\Questions;
use App\Models\User;
use Illuminate\Support\Facades\DB;



class QuestionsController extends Controller
{
    // Get Questions List from database

    public function getQuestionList()
    {
        try
        {
            $questions = Questions::join('users', 'users.id', '=', 'questions.user_id')
               ->get(['users.name', 'questions.*']);
            return response()->json($questions);
        }
        catch(Exception $e)
        {
            Log::error($e);
        }
    }

    //adding new questions
    public function store(Request $request)
    {
        try
        {
            $question = $request->get('questionName');
            $description = $request->get('questionDescription');
            $userId = Auth::user()->id;

            Questions::create([
                'question'      => $question,
                'description'   => $description,
                'user_id'       => $userId     
            ]);

            return response()->json([
                'question'      => $question,
                'description'   => $description,
                'user_id'       => $userId    
            ]);

        }
        catch(Exception $e)
        {
            Log::error($e);
        }
    }
}
