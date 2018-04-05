<?php

use Illuminate\Http\Request;
use App\Todo;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/todos', function (){
    $todos = Todo::all();
    return $todos;
});

Route::post('/todo/create', function (Request $request){
    $data = ['title'=>$request->get('title'),'completed'=>0];
    $todo = Todo::create($data);
    return $todo;
});

Route::patch('/todo/{todo}/completed', function (Todo $todo){
    $todo->completed = !$todo->completed;
    $todo->save();
});

Route::get('/todo/{todo}', function (Todo $todo){
    return $todo;
});

Route::delete('/todo/{todo}/delete', function (Todo $todo){
    $todo->delete();
    return response()->json(['deleted'],204);
});
