<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class UserSearchTest extends TestCase
{
	use DatabaseTransactions;
    /**
     * @test
     * it returns a user which matches given name
     */
    public function it_returns_a_user_which_matches_given_name()
    {
    	$user1 = factory('App\User')->create();
    	$user2 = factory('App\User')->create();

    	$response = $this->getJson('api/users/search/'.$user1->name);
    	
    	$response->assertStatus(200);

    	$json_response = $response->json();

    	$this->assertEquals([$user1->name], array_column($json_response ,'name'));
    	$this->assertNotEquals([$user2->name], array_column($json_response ,'name'));
    }

    /**
     * @test
     * it can return multiple users that matches a given name
     */
    public function it_can_return_multiple_users_that_matches_a_given_name()
    {
    	$user1 = factory('App\User')->create(['name' => 'User Name']);
    	$user2 = factory('App\User')->create(['name' => 'User Name']);

    	$response = $this->getJson('api/users/search/'.$user1->name)->json();

    	$this->assertEquals([$user1->name, $user2->name], array_column($response ,'name'));
    }

    /**
     * @test
     * it can search a user when a part of the name is given
     */
    public function it_can_search_a_user_when_a_part_of_the_name_is_given()
    {
    	$user1 = factory('App\User')->create(['name' => 'User Something Name']);

    	$response = $this->getJson('api/users/search/Something')->json();

    	$this->assertEquals([$user1->name], array_column($response ,'name'));
    }

    /**
     * @test
     * it is not case sensitive
     */
    public function it_is_not_case_sensitive()
    {
    	$user1 = factory('App\User')->create(['name' => 'User Something Name']);

    	$response = $this->getJson('api/users/search/something')->json();

    	$this->assertEquals([$user1->name], array_column($response ,'name'));
    }
}
