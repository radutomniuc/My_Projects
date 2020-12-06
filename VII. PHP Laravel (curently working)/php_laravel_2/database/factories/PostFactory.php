<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class PostFactory extends Factory
{
    public function definition()
    {

        return [
            'user_id' => App\Models\User::factory(),
            'title' => $faker->sentence,
            'post_image' => $faker->imageUrl('900', '300'),

        ];

    }
}
