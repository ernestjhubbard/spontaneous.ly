### Spontaneous.ly
Sponatenous.ly is an app that is designed for users that want to partake in a spontaneous adventure.  Users can:
- Search by zip code
- Filter results based on level of adventure, cost, and distance from their zipcode
- Select an activity to commit to in their area
- Reserve a spot at that activity
- Gain points for completing the activity
- Meet new people at the activity
- Request to be a friend of other guests at that activity
- View ther Spontaneity Points
- View their friends list
- View their pending friend requests
- Send and receive messages from friends
- View past activities and more

### Figma
- https://www.figma.com/file/EjwaZdxQ74QSmY26RoPJ01/Spontaneous.ly?node-id=84%3A25

### DB Designer
- https://dbdesigner.page.link/iDbu

### Meistertask
- https://www.meistertask.com/app/project/eOadHQQN/final-project-spontaneous-ly

### Naming Convention
- File Structure: kebab-case
-- Example: example-component.jsx

- SQL Table Names: camelCase
-- Example: SELECT * FROM `exampleTable`;

- SQL Column Names: camelCase
-- Example: SELECT `messageId`, `sentAt` FROM `messages`;

- SQL Primary Keys: Avoid just using `id`
-- Example: `u`.`userId` instead of `u`.`id`

- SQL Boolean Flag: Use `is` prefix
-- Example: `isAccepted`

- SQL Strings: Indent the strings
-- Example: SELECT `userId`
              FROM `users`
             WHERE `userId` = $user_id

- PHP: snake_case
-- Example: function example_function() // $example_variable

- CSS Classes: kebab-case
-- Example: .example-class

- CSS IDs: kebab-case
-- Example: #example-id
