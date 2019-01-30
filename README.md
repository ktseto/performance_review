# Full Stack React App Skeleton

By [Kam Seto](mailto:setokt@gmail.com)

[ktseto.github.io](https://ktseto.github.io)

## Instructions

1. Clone [repo](https://github.com/ktseto/performance_review) with `git clone https://github.com/ktseto/performance_review`
2. Run `npm install` to install dependencies
3. Create `server/credentials.js` to supply the database credentials to `db.js`
4. If database does not yet exist, manually create it in PostgreSQL.
5. Update database name in `server/db.js`
6. Update `server/seed.js` and run `npm run seed` to seed the database.
7. Start server with `npm start`
8. Run tests with `npm test`
9. Navigate to the app in [browser](http://localhost:8000)
10. Start building

## Tech Stack

To build the front-end, I used React, HTML, and CSS Modules.  The back-end consists of a Node/Express server and a PostgreSQL database.  For testing, I used Jest and Enzyme.  I wrote the JavaScript in accordance with the AirBnB style guide.

## Requirements

### Build a web application that allows employees to submit feedback toward each other's performance review.

#### Admin View

* Add/remove/update/view employees
  * Not attempted

* Add/update/view performance reviews
  * Not attempted

* Assign employees to participate in another employee's performance review
  * Attempted

#### Employee View

* List of performance reviews requiring feedback
  * Attempted

* Submit feedback
  * Not attempted

## Bonuses

None specified.

## Notes

* I started sketching out what the backend schema looks like. DB will need to be seeded first, at least for testing.  Postgres is an obvious choice given the relational nature of the data.
* Then it's on to the basic UI