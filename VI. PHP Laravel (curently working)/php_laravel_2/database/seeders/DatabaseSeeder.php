<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
//         \App\Models\User::factory(10)->create()->each(function($users){
//             $users->posts()->save(factory('App\Models\Post')->make());
//         });
//    }
//}

\App\Models\User::factory(10)->create()->each(function($user){
    $user->posts()->save(\App\Models\Post::factory()->make());
});
}
}

