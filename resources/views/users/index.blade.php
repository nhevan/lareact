@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row">
        <div class="col-md-8 col-md-offset-2">
            <div class="panel panel-default">
                <div class="panel-heading">Users List</div>

                <div class="panel-body">
                    <div id="users-list"></div>
                </div>
				<div id="users-pagination-links"></div>
            </div>
        </div>
    </div>
</div>
@endsection
