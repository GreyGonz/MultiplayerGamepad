<?php

use App\User;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      $admin = factory(User::class)->create([
        'name' => env('ADMIN_USER', 'gerard'),
        'email' => env('ADMIN_EMAIL', 'gerardrey@iesebre.com'),
        'password' => bcrypt(env('ADMIN_PASSWORD', '123456'))
      ]);
    }
}
