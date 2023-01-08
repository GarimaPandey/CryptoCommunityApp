import React from 'react';
import ReactDOM from 'react-dom';

function NewQuestion() {
    return (
        <form>
  <div class="row mb-3">
    <label for="inputEmail3" class="col-sm-2 col-form-label">Question</label>
    <div class="col-sm-10">
      <input type="question" class="form-control" id="question"></input>
    </div>
  </div>
  <div class="row mb-3">
    <label for="description" class="col-sm-2 col-form-label">Description</label>
    <div class="col-sm-10">
      <input type="description" class="form-control" id="inputDescription"></input>
    </div>
  </div>

  <button type="submit" class="btn btn-primary">Sign in</button>
</form>
        );
}

export default NewQuestion;
