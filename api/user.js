const express = require("express");
const client = require("../database/connection");
const router = express.Router();

router.get("/", (req, res) => {
  client.query(
    `SELECT id, username, "createdAt"
	FROM public."User";`,
    (error, result) => {
      if (!error) {
        if (result.rowCount > 0) {
          res.status(200).send(result.rows);
        } else {
          res.status(204);
        }
      }
    }
  );
  client.end;
});
router.get("/:id", (req, res) => {
  const query = {
    text: `SELECT id, username, "createdAt"
    FROM public."User"
    WHERE id = $1;`,
    values: [req.params.id],
  };
  client.query(query, (error, result) => {
    if (!error) {
      console.log(result.rowCount);
      if (result.rowCount > 0) {
        res.status(200).send(result.rows);
      } else {
        res.sendStatus(404);
      }
    }
  });
  client.end;
});

router.post("/", (req, res) => {
  const query = {
    text: `INSERT INTO public."User"(
    username)
    VALUES ($1);`,
    values: [req.body.username],
  };

  client.query(query, (error, result) => {
    if (!error) {
      res.status(201).send("user created");
    } else {
      res.status(500).send("we got an error, try again");
    }
  });
  client.end;
});

router.put("/:id", (req, res) => {
  const query = {
    text: `UPDATE public."User"
    SET username=$1
    WHERE id = $2;`,
    values: [req.body.username, req.params.id],
  };

  client.query(query, (error, result) => {
    if (!error) {
      res.status(204).send("user updated");
    } else {
      res.sendStatus(404);
    }
  });
  client.end;
});

router.delete("/:id", (req, res) => {
  const query = {
    text: `DELETE FROM public."User"
    WHERE id = $1;`,
    values: [req.params.id],
  };

  client.query(query, (error, result) => {
    if (!error) {
      res.status(204).send("user deleted");
    } else {
      res.sendStatus(404);
    }
  });
  client.end;
});

module.exports = router;
