package crossing.e1.configurator.tasks;

import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.util.List;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;

import crossing.e1.configurator.Activator;
import crossing.e1.configurator.Constants;
import crossing.e1.configurator.utilities.Utils;

public class TaskJSONReader {

	private static List<Task> tasks;

	public static List<Task> getTasks() {

		if (tasks == null) {
			BufferedReader reader;
			try {
				reader = new BufferedReader(new FileReader(Utils.getAbsolutePath(Constants.jsonTaskFile)));
				final Gson gson = new Gson();

				tasks = gson.fromJson(reader, new TypeToken<List<Task>>() {}.getType());

			} catch (final FileNotFoundException e) {
				Activator.getDefault().logError(e);
			}
		}

		return tasks;

	}

}